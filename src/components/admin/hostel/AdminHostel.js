import { Button, DataTable } from '@blotoutio/ui-kit';
import { Edit, Trash } from '@blotoutio/ui-kit/icons';
import { useEffect, useState } from 'react';
import { useLocalState } from '../../../util/useLocalStorage';
import AdminDashboard from '../dashboard/AdminDashboard';
import { Welcome } from '../dashboard/style';
import { TableIconsWrapper, TableIconWrapper, Wrapper, Release } from './style';
import Block from '../icons/Block.svg';

const AdminHostel = () => {
  const [hostels, setHostels] = useState();
  const [loading, setLoading] = useState(true);
  const [jwt, setJwt] = useLocalState('', 'jwt');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch('/admin/viewHostels', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setHostels(data.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const getHostelData = () => {
    if (!hostels) {
      return;
    }

    return hostels.map((hostel) => {
      return [
        hostel.hostel.hostelName || '-',
        hostel.hostel.hostelType || '-',
        hostel.hostel.hostelStatus || '-',
        hostel.hostel.hostelRooms || '-',
        hostel.wardenName || '-',
        hostel.wardenEmail || '-',
        <TableIconsWrapper>
          <TableIconWrapper
            onClick={() => {
              console.log('edit');
            }}
            isDisabled={loading}
            title={'Edit hostel'}
          >
            <Edit />
          </TableIconWrapper>
          <TableIconWrapper
            className={'trash'}
            onClick={() => {
              console.log('delete');
            }}
            isDisabled={loading}
            title={'Delete hostel'}
          >
            <Trash />
          </TableIconWrapper>
          <TableIconWrapper
            className={'trash'}
            onClick={() => {
              console.log('block');
            }}
            isDisabled={loading}
            title={'Block hostel'}
          >
            <img src={Block} />
          </TableIconWrapper>
          <TableIconWrapper
            onClick={() => {
              console.log('Release');
            }}
            isDisabled={loading}
            title={'Release hostel'}
          >
            <Release>R</Release>
          </TableIconWrapper>
        </TableIconsWrapper>,
      ];
    });
  };

  return (
    <AdminDashboard>
      <Wrapper>
        {loading ? (
          <Welcome>Loading....</Welcome>
        ) : (
          <DataTable
            headers={[
              'Hostel Name',
              'Hostel Type',
              'Hostel Status',
              'Hostel Rooms',
              'Warden Name',
              'Warden Email',
              'Actions',
            ]}
            rows={getHostelData()}
            noData={'No hostels found'}
            perPage={{
              label: '5',
              value: 5,
            }}
          />
        )}
      </Wrapper>
    </AdminDashboard>
  );
};

export default AdminHostel;
