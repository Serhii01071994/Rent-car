import { StyledNavLink } from "components/App.styled";

export const Welcome = () =>
{
    return (
      <div>
        <header className="header">
          <nav className="navigation">
            <StyledNavLink to="/">Home</StyledNavLink>
            <StyledNavLink to="/catalog">Catalog</StyledNavLink>
            <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          </nav>
            </header>
            
      </div>
    );
}