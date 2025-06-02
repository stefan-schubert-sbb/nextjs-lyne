'use client';
import { SbbHeaderButton } from '@sbb-esta/lyne-react/header';
import { SbbImage } from '@sbb-esta/lyne-react/image';

export default function AccountBar() {
  const loggedIn = true;
  return loggedIn ? (
    <SbbHeaderButton>
      <SbbImage
        slot="icon"
        imageSrc="https://dev.cdn.img.sbb.ch/content/dam/internet/shared/images/grafiken/profile-sbb-evening.png"
        className="sbb-image-border-radius-round sbb-image-1-1 max-h-[24px] w-full max-w-[24px]"
      />
      ...
    </SbbHeaderButton>
  ) : (
    <SbbHeaderButton iconName="user-small">Anmelden</SbbHeaderButton>
  );
}
