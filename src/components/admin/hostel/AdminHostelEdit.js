import { Button, Box, Snackbar } from '@blotoutio/ui-kit';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useLocalState } from '../../../util/useLocalStorage';
import AdminDashboard from '../dashboard/AdminDashboard';
import { Welcome } from '../dashboard/style';
import AdminHostelForm from './AdminHostelForm';
import { addHostelInit } from './data';
import { Wrapper } from './style';

const AdminHostelEdit = () => {
  const [jwt, setJwt] = useLocalState('', 'jwt');
  const [loading, setLoading] = useState(true);
  const [form, setForm] = useState(addHostelInit);
  const [snackbar, setSnackbar] = useState({
    variant: 'success',
    message: '',
  });
  const navigate = useNavigate();
  const { hostelId } = useParams();

  useEffect(() => {
    fetchData();
  }, [hostelId]);

  const fetchData = () => {
    if (!hostelId) {
      return;
    }

    fetch('/admin/viewHostels', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const hostel = data.find((ele) => ele.hostel.hostelId === hostelId)
        setForm({
          hostelName: hostel.hostel.hostelName,
          hostelType: hostel.hostel.hostelType,
          hostelStatus: hostel.hostel.hostelStatus,
          hostelRooms: hostel.hostel.hostelRooms,
          wardenName: hostel.wardenName,
          wardenEmail: hostel.email,
          phone: hostel.wardenPhoneNo
        })
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

  const isValid = () => {
    let valid = true;
    const notValid = { ...addHostelInit.notValid };

    if (!form.hostelName) {
      notValid.name = 'Please enter a valid Hostel Name';
      valid = false;
    }

    if (!form.warden) {
      notValid.name = 'Please select a valid warden';
      valid = false;
    }

    if (form.warden.value === 'new-warden') {
      if (!form.newWarden.email) {
        notValid.newWarden.email = 'Please enter a valid email';
        valid = false;
      }
      if (!form.newWarden.phone && form.newWarden.phone.length === 10) {
        notValid.newWarden.phone = 'Please enter a valid phone';
        valid = false;
      }
      if (!form.newWarden.name) {
        notValid.newWarden.name = 'Please enter a valid name';
        valid = false;
      }
      if (!form.newWarden.password) {
        notValid.newWarden.password = 'Please enter a valid password';
        valid = false;
      }
    }

    setForm({ ...form, notValid });
    return valid;
  };

  const handleEdit = async () => {
    if (!isValid()) {
      return;
    }

    try {
      setLoading(true);
      await fetch(
        `/admin/editHostelName/${hostelId}?hostelName=${form.hostelName}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      if (form.warden.value === 'new-warden') {
        const wardenPayload = {
          name: form.newWarden.name,
          email: form.newWarden.email,
          password: form.newWarden.password,
          phoneNo: form.newWarden.phone,
          hostelId,
        };

        await fetch('/admin/wardenRegistration', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
          body: wardenPayload,
        });
      } else {
        await fetch(`/admin/mapWarden/${hostelId}?email=${form.warden.value}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${jwt}`,
          },
        });
      }
      navigate('/admin/hostel');
    } catch (e) {
      console.error(e);
      setSnackbar({
        message: e,
        variant: 'error',
      });
    }

    setLoading(false);
  };

  return (
    <AdminDashboard>
      <Wrapper>
        {loading ? (
          <Welcome>Loading....</Welcome>
        ) : (
          <>
            <Box
              title='Edit Hostel'
              action={
                <Button
                  color='secondary'
                  onClick={handleEdit}
                  isDisabled={loading}
                  size='S'
                >
                  Save
                </Button>
              }
              loading={loading}
            >
              <AdminHostelForm form={form} setForm={setForm} edit={true} />
            </Box>
            {snackbar && snackbar.message && (
              <Snackbar
                message={snackbar.message}
                variant={snackbar.variant}
                onClose={() => setSnackbar(null)}
              />
            )}
          </>
        )}
      </Wrapper>
    </AdminDashboard>
  );
};

export default AdminHostelEdit;
