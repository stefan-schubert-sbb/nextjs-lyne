import { SbbImage } from '@sbb-esta/lyne-react/image';
import { SbbTitle } from '@sbb-esta/lyne-react/title';

export default function Greeting() {
  return (
    <div className="flex gap-7">
      <SbbImage
        imageSrc="https://dev.cdn.img.sbb.ch/content/dam/internet/shared/images/grafiken/profile-sbb-evening.png"
        className="sbb-image-border-radius-round sbb-image-1-1 max-h-18 w-full max-w-18"
      />
      <SbbTitle level="2">Guten Tag...</SbbTitle>
    </div>
  );
}
