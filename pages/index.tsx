import Head from 'next/head'
import { FaInstagram, FaTwitter } from 'react-icons/fa'

const Profiles = (props: any) => {
  return (
    <>
      <div className="relative flex flex-col items-center p-6 mt-12 border-2 border-blue-400 shadow-xl rounded-2xl">
        <div className="absolute w-24 h-24 overflow-hidden border-2 border-blue-400 rounded-full -top-10">
          <img
            className="object-contain object-center aspect-square"
            src={props.image}
            alt=""
          />
        </div>

        <h2 className="pt-12 text-3xl font-medium">{props.name}</h2>
        <p className="text-xl">{props.price}</p>
        <div className="flex gap-4 pt-6">
          {/* <div className="rounded-full border-2 border-blue-400 p-1.5 text-blue-400"> */}
          <FaInstagram className="w-8 h-8" />
          {/* </div> */}
          {/* <div className="rounded-full border-2 border-blue-400 p-1.5 text-blue-400"> */}
          <FaTwitter className="w-8 h-8" />
          {/* </div> */}
        </div>
      </div>
    </>
  )
}

const index = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="py-20">
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
