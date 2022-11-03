import { DataTable } from '@blotoutio/ui-kit';
import { useEffect, useState } from 'react';
import { useLocalState } from '../../../util/useLocalStorage';
import AdminDashboard from '../dashboard/AdminDashboard';
import { Welcome } from '../dashboard/style';
import { Wrapper } from './style';

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
        'Dummy',
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
