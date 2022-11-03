import { Button, Box, Snackbar } from '@blotoutio/ui-kit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalState } from '../../../util/useLocalStorage';
import AdminDashboard from '../dashboard/AdminDashboard';
import { Welcome } from '../dashboard/style';
import AdminHostelForm from './AdminHostelForm';
import { addHostelInit } from './data';
import { Wrapper } from './style';

const AdminHostelAdd = () => {
  const [jwt, setJwt] = useLocalState('', 'jwt');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(addHostelInit);
  const [snackbar, setSnackbar] = useState({
    variant: 'success',
    message: '',
  });
  const navigate = useNavigate();

  const isValid = () => {
    let valid = true;
    const notValid = { ...addHostelInit.notValid };

    if (!form.hostelName) {
      notValid.name = 'Please enter a valid Hostel Name';
      valid = false;
    }

    if (!form.hostelType) {
      notValid.name = 'Please enter a valid Hostel Type';
      valid = false;
    }

    if (!form.hostelStatus) {
      notValid.name = 'Please enter a valid Hostel Status';
      valid = false;
    }

    if (!form.hostelRooms) {
      notValid.name = 'Please enter a valid Hostel Rooms';
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

  const handleAdd = async () => {
    if (!isValid()) {
      return;
    }

    try {
      setLoading(true);
      const hostelPayload = {
        hostelName: form.hostelName,
        hostelType: form.hostelType,
        hostelStatus: form.hostelStatus,
        hostelRooms: form.hostelRooms,
      };

      await fetch('/admin/addHostel', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: hostelPayload,
      });

      const hostelId = await fetch('/admin/getHostelId', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwt}`,
        },
        body: hostelPayload,
      });

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
              title='Add Hostel'
              action={
                <Button
                  color='secondary'
                  onClick={handleAdd}
                  isDisabled={loading}
                  size='S'
                >
                  Add
                </Button>
              }
              loading={loading}
            >
              <AdminHostelForm form={form} setForm={setForm} />
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

export default AdminHostelAdd;
