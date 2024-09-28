export default function SotaActivations({ numActivations = 5 }) {
    return (
        <div className="mb-8">
            <h2 className="text-lg font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-xl sm:leading-10 md:text-2xl md:leading-14">
                Last {numActivations} SOTA activations
            </h2>

            <iframe
                className="w-full h-44"
                src={`https://neon1.net/sota/myact/?c=LB1DK&l=${numActivations}&w=1&h=1`}
                title={`Last ${numActivations} SOTA activations`}
            />
        </div>
    )
}
