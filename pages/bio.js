import Head from 'next/head'
import Image from "next/image"
import Link from 'next/link'

export default function Bio() {
    return (
        <div className="bg-tertiary text-white">
            <Head>
                <title>Biology Organs | Biolearn</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <div className="grid w-full py-4 place-items-center text-center">
                <h1 className="pb-2 text-5xl font-semibold tracking-wide lg:text-6xl">
                    Select Topic
                </h1>
                <div className="inline-flex h-1 bg-secondary rounded-full w-96"></div>
            </div>

            <div className="flex flex-wrap flex-col-2 justify-around w-full px-16 py-8">

                <Link href='/skull' passHref>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-primary rounded-lg">
                                <Image width="350" height="200" src="/skull.jpeg" alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl font-semibold bg-homeImg font-sourceSerifPro">Human Skull</div>
                        </div>
                    </div>
                </Link>

                <Link href='/plantCell' passHref>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-primary rounded-lg">
                                <Image width="350" height="200" src="/plant_cell.jpeg" alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl font-semibold bg-homeImg font-sourceSerifPro">Plant Cell</div>
                        </div>
                    </div>
                </Link>

                <Link href='/animalCell' passHref>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-primary rounded-lg">
                                <Image width="350" height="200" src="/animal_cell.jpeg" alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl font-semibold bg-homeImg font-sourceSerifPro">Animal Cell</div>
                        </div>
                    </div>
                </Link>

                <Link href='/brain' passHref>
                    <div className="m-8">
                        <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-8 border-4  border-primary rounded-lg">
                                <Image width="350" height="200" src="/humanBrain.jpeg" alt="" /></div>
                            <div className="grid -mt-9 place-content-center mx-1 text-xl font-semibold bg-homeImg font-sourceSerifPro">Human Brain</div>
                        </div>
                    </div>
                </Link>

                <Link href='/spinal' passHref>
                    <div className="m-8">
                        <div className="w-72 h-80 cursor-pointer transition duration-500 transform hover:scale-105">
                            <div className="pb-16 border-4  border-primary rounded-lg">
                                <Image width="350" height="200" src="/segmentation_of_lungs_and_spinalColumn.jpeg" alt="" /></div>
                            <div className="grid -mt-16 place-content-center text-center mx-1 text-xl font-semibold bg-homeImg font-sourceSerifPro">Segmentation of Lungs and Spinal Column</div>
                        </div>
                    </div>
                </Link>

                <div className="m-8">
                    <div className="w-72 h-72 cursor-pointer transition duration-500 transform hover:scale-105 border-4 border-primary rounded-lg">
                        <div className="grid place-content-center text-3xl text-center items-center align-middle h-full font-semibold font-sourceSerifPro">More topics comming soon..</div>
                    </div>
                </div>

            </div>

        </div>
    )
}
