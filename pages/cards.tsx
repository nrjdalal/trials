import Head from 'next/head'
import { BsCollectionPlay } from 'react-icons/bs'
import { FaFacebook, FaInstagram, FaPlay, FaTwitter } from 'react-icons/fa'

const index = () => {
  const Profiles = (props: any) => {
    return (
      <>
        <div className="relative flex flex-col items-center p-6 mt-20 bg-white border-2 border-blue-400 shadow-2xl rounded-2xl">
          <div className="absolute w-40 h-40 overflow-hidden border-2 border-blue-400 rounded-full -top-20">
            <img
              className="object-contain object-center bg-white aspect-square"
              src={props.image}
              alt=""
            />
          </div>

          <div className="pt-20">
            <BsCollectionPlay className="w-8 h-8 text-blue-500" />
          </div>

          <h2 className="pt-6 text-3xl font-medium tracking-wide text-blue-500">
            {props.name}
          </h2>
          <p className="text-xl italic">{props.price}</p>

          <div className="flex gap-4 pt-6">
            <FaFacebook className="w-8 h-8 text-blue-500" />

            <FaInstagram className="w-8 h-8 text-pink-400" />

            <FaTwitter className="w-8 h-8 text-blue-500" />
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-20 bg-slate-100">
        <div className="grid max-w-screen-lg grid-cols-1 gap-6 px-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
          <Profiles
            image="https://source.unsplash.com/random/500x500/?guy,alfa"
            name="Abhishek"
            price="$300 for 60 minutes"
          />
          <Profiles
            image="https://source.unsplash.com/random/500x500/?guy,beta"
            name="Neeraj"
            price="$300 for 60 minutes"
          />
          <Profiles
            image="https://source.unsplash.com/random/500x500/?girl,alfa"
            name="Disha"
            price="$800 for 60 minutes"
          />
          <Profiles
            image="https://source.unsplash.com/random/500x500/?girl,beta"
            name="Nikita"
            price="$700 for 60 minutes"
          />
          <Profiles
            image="https://source.unsplash.com/random/500x500/?guy,charlie"
            name="Saurav"
            price="$400 for 60 minutes"
          />
          <Profiles
            image="https://source.unsplash.com/random/500x500/?guy,delta"
            name="Anmol"
            price="$800 for 60 minutes"
          />
        </div>
      </div>
    </>
  )
}

export default index
