// Bismillahirrahmanirahim
// Elhamdulillahirabbilalemin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah ve La ilahe illAllahu Allahu Ekber
// La ilahe illAllahu vahdehu la sharike leh, lehul mulku ve lehul hamdu
// yuhyi ve yumit ve biyadihil xayr
// huve ala kulli şey'in kadir
// SubhanAllahi ve bihamdi, subhanAllahil Azim.
// Seyyidina Muhammeden Abduhu ve Rasuluhu
// Elhamdulillah ya Samed i Gani i Kerim i Vehhab i Erhamer Rahimin i Quddus i Baqi i Haq i Ferd i Hamidun Mecid i Ehed i Alim i Basir i Sami i Halim i Rauf
// Allahu Ekber Allahu Ekber Allahu Ekber La ilahe illAllah
// Allahu Ekber Allahu Ekber ve Lillahil Hamd
"use client";

import Link from "next/link";
import { useSession } from "@/app/xani/SessionProvider";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import UserButton from "@/components/UserButton";

export default function AdminNavbar() {
  const { user } = useSession();

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4">
      <Container fluid>
        <Navbar.Brand as={Link} href="/xani" className="fw-bold">
          Yekazad Admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="admin-navbar-nav" />
        <Navbar.Collapse id="admin-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/xani">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} href="/xani/users">
              Kullanıcılar
            </Nav.Link>
            <NavDropdown title="Blog" id="nav-dropdown-blog">
              <NavDropdown.Item as={Link} href="/xani/posts">
                Blog Yazıları
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/xani/rojname">
                Yeni Yazı
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories">
                Kategoriler
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/xani/dirok">
            Ekibimiz Sayfası
            </Nav.Link>
          </Nav>

          <div className="d-flex align-items-center gap-2">
            <span className="text-muted d-none d-lg-inline">
              {user ? `@${user.username}` : "Admin"}
            </span>
            <UserButton />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
