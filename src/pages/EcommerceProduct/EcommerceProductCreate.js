import { useParams, useLocation } from 'react-router-dom';
// material
import { Container } from '@mui/material';
// components
import Page from '../../components/Page';
import HeaderBreadcrumbs from '../../components/HeaderBreadcrumbs';
import ProductNewForm from '../../components/_dashboard/e-commerce/ProductNewForm';
// routes
import { PATH_DASHBOARD } from '../../routes/paths';
// hooks
import useSettings from '../../hooks/useSettings';

// ----------------------------------------------------------------------

export default function EcommerceProductCreate() {
  const { themeStretch } = useSettings();
 

  const { pathname } = useLocation();
  const { name } = useParams();
  const isEdit = pathname.includes('edit');

  return (
    <Page title="Ecommerce: Create a new product |Junior">
      <Container maxWidth={themeStretch ? false : 'lg'}>
        <HeaderBreadcrumbs
          heading={!isEdit ? 'Create a new product' : 'Edit product'}
          links={[
            { name: 'Dashboard', href: PATH_DASHBOARD.root },
            {
              name: 'E-Commerce',
              href: PATH_DASHBOARD.eCommerce.root
            },
            { name: !isEdit ? 'New product' : name }
          ]}
        />

        <ProductNewForm isEdit={isEdit} currentProduct={null} />
      </Container>
    </Page>
  );
}
