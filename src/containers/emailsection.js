import React from "react";
import { EmailSection } from "../components";

export default function EmailSectionContainer(props) {
  return (
    <EmailSection>
      <EmailSection.Title>
        Ready to watch? Enter your email to create or restart your membership.
      </EmailSection.Title>
      <EmailSection.InputContainer>
        <EmailSection.Input
          type="text"
          onChange={props.ChangeEmail}
          placeholder="Email Address"
        />
        <EmailSection.Button onClick={props.UserSignup}>
          Get Started {">"}
        </EmailSection.Button>
      </EmailSection.InputContainer>
    </EmailSection>
  );
}
