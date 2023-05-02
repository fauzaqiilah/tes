import { Button } from "antd";
import { Link } from "react-router-dom";

export const MENU_ITEM = [
  {
    label: <Link to="/login"></Link>,
    key: "/form",
  },
  {
    label: <Link to="/petunjuk">Petunjuk</Link>,
    key: "/petunjuk",
  },
  {
    label: <Link to="/form">Form</Link>,
    key: "/form",
  },
  {
    label: <Link to="/aspirasi">Aspirasi</Link>,
    key: "/aspirasi",
  },

  {
    label: (
      <Link to="/">
        <Button
          type="primary"
          onClick={() => {
            localStorage.removeItem("token");
          }}
          danger
        >
          Logout
        </Button>
      </Link>
    ),
    key: "5",
  },
];