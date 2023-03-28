import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Banner } from "../components";
import EmailSectionContainer from "./emailsection";

export default function BannerContainer() {
  const history = useHistory();
  const SigninClick = () => {
    history.push("/login");
  };

  const UserSignup = () => {
    history.push({ pathname: "/signup", state: { UserEmail: UserEmail } });
  };
  const [UserEmail, SetUseremail] = useState("");
  const ChangeEmail = (e) => {
    SetUseremail(e.target.value);
  };
  return (
    <Banner>
      <Banner.Topbar>
        <Banner.Logo src="images/netflix-logo.png" />
        {/* <Banner.LanguageDropdown>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </Banner.LanguageDropdown> */}
        <Banner.SigninBtn onClick={SigninClick}>Sign In</Banner.SigninBtn>
      </Banner.Topbar>
      <Banner.TextConatiner>
        <Banner.Title>
          Unlimited movies, TV <br></br>shows and more.
        </Banner.Title>
        <Banner.SubTitle>Watch anywhere. Cancel anytime.</Banner.SubTitle>
        <EmailSectionContainer
          UserSignup={UserSignup}
          ChangeEmail={ChangeEmail}
        />
      </Banner.TextConatiner>
    </Banner>
  );
}
