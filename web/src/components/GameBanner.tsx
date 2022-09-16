interface GameBannerProps {
    title: string;
    ads: number;
    bannerUrl: string;
}

export function GameBanner(props: GameBannerProps) {
  return (
    <a className='relative rounded-lg overflow-hidden'>
        <img src={props.bannerUrl} alt="" />
          <div className='w-full pt-16 pb-4 px-4 bg-gamebox-gradient absolute bottom-0 left-0'>
            <strong className='font-black text-white block'>{props.title}</strong>
            <span className='text-zinc-300 text-sm block'> {props.ads} anúncio(s)</span>
          </div>
    </a>
  );
}