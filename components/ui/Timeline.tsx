import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getData() {
    const data = await prisma.post.findMany({
    select: {
        country: true,
        city: true,
        travelDatesFrom: true,
        travelDatesTo: true,
        companions: true,
        transportation: true,
        experience: true,
        visitedPlaces: true,
        photoUrl: true,
        createdAt: true,
    },
    orderBy: {
        createdAt: "desc",
    },
    });

    return data;
}

const Timeline = async () => {
    const data= await getData();

    return (
    <>
            <div className="bg-white mb-5 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-4">Timeline Wall</h3>
                {data.map((post, id) => (
                    <div
                    key={id}
                    className="bg-gray-100 p-4 rounded-md mb-4 text-gray-800 ">
                    <h3 className="text-xl font-semibold">{post.country} - {post.city}</h3>
                    <p className="text-gray-800 ">Traveled from: {post.travelDatesFrom} to: {post.travelDatesTo}</p>
                    <p className="text-gray-800 ">as:  {post.companions}</p>
                    <p className="text-gray-800 ">by: {post.transportation}</p>
                    <p className="text-gray-800 ">Experience: {post.experience}</p>
                    <p className="text-gray-800 ">Visited Places: {post.visitedPlaces}</p>
                    <p>Created at: {`${post.createdAt.getFullYear()}.${post.createdAt.getMonth() + 1}.${post.createdAt.getDate()}`}</p>
                    </div>
                ))}
            </div>
    </>
);
    };
export default Timeline;
