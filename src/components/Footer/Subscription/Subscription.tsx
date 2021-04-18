import {
  SubscriptionContainer,
  SubscriptionHeading,
  SubscriptionText,
  SubscriptionForm,
  SubscriptionFormInput,
} from "./Subscription.styled";
import { Button } from "../../../globalStyles";
import React from "react";

const Subscription: React.FC = () => {
  return (
    <SubscriptionContainer>
      <SubscriptionHeading>
        Join our exclusive membership to receive the latest news and trends
      </SubscriptionHeading>
      <SubscriptionText>You can unsubscribe at any time</SubscriptionText>
      <SubscriptionForm>
        <SubscriptionFormInput
          name="email"
          type="email"
          placeholder="Your Email"
        />
        <Button fontBig>Subscribe</Button>
      </SubscriptionForm>
    </SubscriptionContainer>
  );
};

export default Subscription;
