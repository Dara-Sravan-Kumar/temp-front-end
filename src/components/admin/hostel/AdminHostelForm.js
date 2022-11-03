import { Input, SimpleSelect } from '@blotoutio/ui-kit';
import { useEffect, useState } from 'react';
import { Welcome } from '../dashboard/style';
import { StyledFieldWrapper } from './style';

const hostelTypes = [
  { label: 'Boys', value: 'B' },
  { label: 'Girls', value: 'G' },
];

const hostelStatuses = [
  { label: 'Normal', value: 'N' },
  { label: 'Blocked', value: 'B' },
];

const AdminHostelForm = ({ form, setForm, edit }) => {
  const [wardens, setWardens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch('/admin/viewWardens')
      .then((response) => response.json())
      .then((data) => {
        setWardens([
          {
            label: 'Add new warden',
            value: 'new-warden',
          },
          ...data.map((warden) => ({
            label: warden.email,
            value: warden.email,
          })),
        ]);
      })
      .catch((e) => {
        console.error(e);
        setSnackbar({
          message: e,
          variant: 'error',
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleChange = (name) => (e) => {
    let value = e;
    if (e.currentTarget) {
      value = e.currentTarget.value || '';
    }

    setForm({ ...form, [name]: value });
  };

  const handleNewWarden = (name) => (e) => {
    let value = e;
    if (e.currentTarget) {
      value = e.currentTarget.value || '';
    }

    setForm({
      ...form,
      newWarden: {
        [name]: value,
      },
    });
  };

  return (
    <>
      {loading ? (
        <Welcome>Loading....</Welcome>
      ) : (
        <>
          <StyledFieldWrapper label='Hostel Name'>
            <Input
              onChange={handleChange('hostelName')}
              placeholder='e.g. Aravali'
              error={!!form.notValid.hostelName}
              value={form.hostelName}
            />
          </StyledFieldWrapper>
          <StyledFieldWrapper label='Hostel Type'>
            <SimpleSelect
              margin={0}
              options={hostelTypes}
              handleChange={handleChange('hostelType')}
              value={form.hostelType || hostelTypes[0]}
              isDisabled={edit}
            />
          </StyledFieldWrapper>
          <StyledFieldWrapper label='Hostel Status'>
            <SimpleSelect
              margin={0}
              options={hostelStatuses}
              handleChange={handleChange('hostelStatus')}
              value={form.hostelStatus || hostelStatuses[0]}
              isDisabled={edit}
            />
          </StyledFieldWrapper>
          <StyledFieldWrapper label='Hostel Rooms'>
            <Input
              onChange={handleChange('hostelRooms')}
              placeholder='e.g. 10'
              type={'number'}
              error={!!form.notValid.hostelRooms}
              value={form.hostelRooms}
              disabled={edit}
            />
          </StyledFieldWrapper>
          <StyledFieldWrapper label='Warden'>
            <SimpleSelect
              margin={0}
              options={wardens}
              handleChange={handleChange('warden')}
              value={form.warden}
            />
          </StyledFieldWrapper>
          {form.warden && form.warden.value === 'new-warden' && (
            <>
              <StyledFieldWrapper label='Warden Name'>
                <Input
                  onChange={handleNewWarden('name')}
                  placeholder='e.g. Dhar'
                  error={!!form.notValid.newWarden.name}
                  value={form.newWarden.name}
                />
              </StyledFieldWrapper>
              <StyledFieldWrapper label='Warden Email'>
                <Input
                  onChange={handleNewWarden('email')}
                  placeholder='e.g. dhar@optum.com'
                  error={!!form.notValid.newWarden.email}
                  value={form.newWarden.email}
                />
              </StyledFieldWrapper>
              <StyledFieldWrapper
                label='Warden Password'
                helperText='Set a password for the warden'
              >
                <Input
                  onChange={handleNewWarden('password')}
                  type={'password'}
                  placeholder='e.g. ********'
                  error={!!form.notValid.newWarden.password}
                  value={form.newWarden.password}
                />
              </StyledFieldWrapper>
              <StyledFieldWrapper label='Warden Phone'>
                <Input
                  onChange={handleNewWarden('phone')}
                  placeholder='e.g. 9876543210'
                  type='number'
                  error={!!form.notValid.newWarden.hostelPhone}
                  value={form.newWarden.hostelPhone}
                />
              </StyledFieldWrapper>
            </>
          )}
        </>
      )}
    </>
  );
};

export default AdminHostelForm;
