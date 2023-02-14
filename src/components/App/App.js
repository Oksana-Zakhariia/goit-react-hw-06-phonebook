import { Container } from 'components/App/App.styled';
import { Section } from 'components/Section/Section';
import { ContactForm } from 'components/Form/Form';
import { ContactList } from 'components/ContactList/ContactList';
import { SearchBox } from 'components/SearchBox/Searchbox';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/Theme';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Section title="Phonebook">
          <ContactForm></ContactForm>
        </Section>
        <Section title="Contacts">
          <SearchBox></SearchBox>
          <ContactList></ContactList>
        </Section>
      </Container>
    </ThemeProvider>
  );
};
