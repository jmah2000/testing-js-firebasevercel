import Image from 'next/image'
import { useRouter } from 'next/router';

import { auth } from 'libs/firebase';

import { ProviderButton } from "ui/buttons";
import google from "./google.png";

function GoogleProvider({ children,  ...props }) {
 

  return (
    <ProviderButton >
      <div>
        <Image
          src={google}
          alt="img"
          layout="fixed"
          width={24}
          height={24}
          quality={30}
        />
        <span>{children}</span>
      </div>
    </ProviderButton>
  );
}

export default GoogleProvider;
