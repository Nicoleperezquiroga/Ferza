import { CustomJumbotron } from '@/shop/Components/CustomJumbotron'
import { InfoCard } from '@/shop/Components/InfoCard'
import { InstagramButton } from '@/shop/Components/InstagramButton'

export const ComoComprarPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <CustomJumbotron title="Como comprar" subTitle="Aquí conoceras los pasos a seguir para poder comprar."/>
      <InstagramButton></InstagramButton>
      <InfoCard />
      </div>
  )
}
