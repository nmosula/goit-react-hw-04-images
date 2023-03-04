import { Container } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <Container>
      <main>
        {children}
      </main>
    </Container>
  );
};

export default Layout;
