import profile_image from '../assets/member_3.png'
export default function TestimonialCard() {
    return (
        <>
            <div className="m-auto p-8">
                <div className="w-1/5 m-auto">
                    <img src={profile_image} />
                </div>
                <h3 className="text-zinc-400 text-2xl my-4">Swaraj Biswal</h3>
                <div className='sm:w-1/5 m-auto'>
                    <a href="#">
                        <div className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/10">
                            <p className="text-zinc-400 text-center font-bold">Blog</p>
                        </div>
                    </a>
                </div>
                <p className="text-zinc-400 text-1xl my-4 px-4 sm:px-16">
                    It's freeing to be able to catch up on customized news and not be
                    distracted by a social media element on the same site.
                    It's freeing to be able to catch up on customized news and not be
                    distracted by a social media element on the same site.
                </p>
            </div>
        </>
    )
}