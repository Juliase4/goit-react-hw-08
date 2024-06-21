import LoginForm from "../../components/LoginForm/LoginForm";
import PageTitle from "../../components/PageTitle/PageTitle.jsx";
import { CiLogin } from "react-icons/ci";

export default function LoginPage() {
  return (
    <div>
      <PageTitle>
        Please log in <CiLogin />
      </PageTitle>
      <LoginForm />
    </div>
  );
}
