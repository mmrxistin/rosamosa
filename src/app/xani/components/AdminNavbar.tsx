// Bismillahirrahmanirahim

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
        <Navbar.Brand as={Link} href="/mmdashboard" className="fw-bold">
          Yekazad Admin
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="admin-navbar-nav" />
        <Navbar.Collapse id="admin-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/mmdashboard">
              Dashboard
            </Nav.Link>
            <Nav.Link as={Link} href="/users">
              Kullanıcılar
            </Nav.Link>
            <NavDropdown title="Blog" id="nav-dropdown-blog">
              <NavDropdown.Item as={Link} href="/posts">
                Blog Yazıları
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/posts/new">
                Yeni Yazı
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} href="/categories">
                Kategoriler
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} href="/reports">
              Raporlar
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
