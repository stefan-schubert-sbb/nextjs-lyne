'use client';
import { SbbActionGroup } from '@sbb-esta/lyne-react/action-group';
import { SbbButton, SbbSecondaryButton, SbbSecondaryButtonStatic } from '@sbb-esta/lyne-react/button';
import { SbbCard, SbbCardBadge } from '@sbb-esta/lyne-react/card';
import { SbbContainer } from '@sbb-esta/lyne-react/container';
import { SbbIcon } from '@sbb-esta/lyne-react/icon';
import { SbbImage } from '@sbb-esta/lyne-react/image';
import { SbbTeaserHero } from '@sbb-esta/lyne-react/teaser-hero';
import { SbbTitle } from '@sbb-esta/lyne-react/title';

import Greeting from './Greeting';

// -> durch API laden
const products = [
  { id: 1, title: 'Essence Mascara Lash Princess', availabilityStatus: 'Low Stock' },
  { id: 2, title: 'Apple Airpower Wireless Charger', availabilityStatus: 'In Stock' },
  { id: 3, title: 'Apple HomePod Mini Cosmic Grey', availabilityStatus: 'Medium Stock' },
  { id: 4, title: 'Boxed Blender', availabilityStatus: 'In Stock' },
  { id: 5, title: 'Citrus Squeezer Yellow', availabilityStatus: 'In Stock' },
  { id: 6, title: 'Egg Slicer', availabilityStatus: 'In Stock' },
];

export default function HomeView() {
  return (
    <SbbContainer>
      <section className="sbb-page-spacing pt-16">
        <Greeting />
      </section>
      <section className="sbb-page-spacing pt-16 flex gap-7 flex-col">
        <SbbTitle level="3">Top Produkte</SbbTitle>
        <div className="grid-cols-2 grid-rows-4 gap-8 grid grid-flow-col">
          {/* geht das hier besser? */}
          {products.map((product) => (
            <SbbCard key={product.id} color="milk">
              {/* badge ein oder ausblenden durch Status aus dem localStorage */}
              <SbbCardBadge>badge</SbbCardBadge>
              <div className="flex w-full h-full gap-[var(--sbb-spacing-responsive-xxxs)] items-center">
                <SbbIcon name="ticket-route-medium" />
                <div className="grow">
                  <SbbTitle level="4">{product.title}</SbbTitle>
                  <span>{product.availabilityStatus}</span>
                </div>
                <SbbSecondaryButtonStatic size="m">Info</SbbSecondaryButtonStatic>
              </div>
            </SbbCard>
          ))}
        </div>
        <SbbActionGroup>
          <SbbButton iconName="bucket-foam-broom-medium">Sauber machen</SbbButton>
          <SbbSecondaryButton iconName="bell-medium">Läuten</SbbSecondaryButton>
        </SbbActionGroup>
      </section>
      <section className="sbb-page-spacing py-16">
        <SbbTeaserHero>
          <SbbImage
            slot="image"
            imageSrc="https://cdn.img.sbb.ch/content/dam/internet/lyne/Hoehenrundweg-Gryden-Lenk.jpg"
          />
        </SbbTeaserHero>
      </section>
    </SbbContainer>
  );
}
