import { Button, DataTable, Snackbar } from '@blotoutio/ui-kit';
import { Edit, Trash } from '@blotoutio/ui-kit/icons';
import { useEffect, useState } from 'react';
import { useLocalState } from '../../../util/useLocalStorage';
import AdminDashboard from '../dashboard/AdminDashboard';
import { Welcome } from '../dashboard/style';
import {
  TableIconsWrapper,
  TableIconWrapper,
  Wrapper,
  Release,
  AddHostel,
} from './style';
import Block from '../icons/Block.svg';
import { generatePath, useNavigate } from 'react-router-dom';

const AdminHostel = () => {
  const [hostels, setHostels] = useState();
  const [loading, setLoading] = useState(true);
  const [jwt, setJwt] = useLocalState('', 'jwt');
  const [snackbar, setSnackbar] = useState({
    variant: 'success',
    message: '',
  });
  const navigate = useNavigate();

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
        setHostels(data);
      })
      .catch((e) => {
        console.error(e);
        setSnackbar({
          variant: 'error',
          message: e,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleHostelDelete = async (hostelId) => {
    try {
      setLoading(true);
      await fetch(`/admin/removeHostel/${hostelId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });

      await fetchData();
    } catch (e) {
      setSnackbar({
        message: e,
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleHostelBlock = async (hostelId) => {
    try {
      setLoading(true);
      await fetch(`/admin/blockHostel/${hostelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });

      await fetchData();
    } catch (e) {
      setSnackbar({
        message: e,
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleHostelRelease = async (hostelId) => {
    try {
      setLoading(true);
      await fetch(`/admin/releaseHostel/${hostelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
      });

      await fetchData();
    } catch (e) {
      setSnackbar({
        message: e,
        variant: 'error',
      });
    } finally {
      setLoading(false);
    }
  }

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
        hostel.email || '-',
        <TableIconsWrapper>
          <TableIconWrapper
            onClick={() => {
              navigate(
                generatePath('/admin/hostel/edit/:hostelId', {
                  hostelId: hostel.hostel.hostelId,
                })
              );
            }}
            isDisabled={loading}
            title={'Edit hostel'}
          >
            <Edit />
          </TableIconWrapper>
          <TableIconWrapper
            className={'trash'}
            onClick={handleHostelDelete.bind(this, hostel.hostel.hostelId)}
            isDisabled={loading}
            title={'Delete hostel'}
          >
            <Trash />
          </TableIconWrapper>
          <TableIconWrapper
            className={'trash'}
            onClick={handleHostelBlock.bind(this, hostel.hostel.hostelId)}
            isDisabled={loading}
            title={'Block hostel'}
          >
            <img src={Block} />
          </TableIconWrapper>
          <TableIconWrapper
            onClick={handleHostelRelease.bind(this, hostel.hostel.hostelId)}
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
          <>
            <AddHostel>
                <Button color='secondary' onClick={() => navigate('/admin/hostel/add')}>+ Add Hostel</Button>
            </AddHostel>
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
          </>
        )}
        {snackbar && snackbar.message && (
          <Snackbar
            message={snackbar.message}
            variant={snackbar.variant}
            onClose={() => setSnackbar(null)}
          />
        )}
      </Wrapper>
    </AdminDashboard>
  );
};

export default AdminHostel;
