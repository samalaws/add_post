"use server";
import { revalidatePath } from "next/cache";
import { prisma } from "@/utils/prisma";




export async function create(formData: FormData) {
  
  const country = formData.get("country") as string;
  const city = formData.get("city") as string;
  const travelDatesFrom = formData.get("travelDatesFrom") as string;
  const travelDatesTo = formData.get("travelDatesTo") as string;
  const companions = formData.get("companions") as string;
  const transportation = formData.get("transportation") as string;
  const experience = formData.get("experience") as string;
  const visitedPlaces = formData.get("visitedPlaces") as string;
  const photoUrl = formData.get("photoUrl") as string;



  if (  !country.trim() ||
        !city.trim()  ||
        !travelDatesFrom.trim() ||
        !travelDatesTo.trim() ||
        !companions.trim() ||
        !transportation.trim() ||
        !experience.trim() ||
        !visitedPlaces.trim()
      )
    {
      return;
  }

  await prisma.post.create({
    data: {
      country: country,
      city: city,
      travelDatesFrom: travelDatesFrom,
      travelDatesTo: travelDatesTo,
      companions: companions,
      transportation: transportation,
      experience: experience,
      visitedPlaces: visitedPlaces,
      photoUrl: photoUrl
    },
  });

  revalidatePath("/");
}
