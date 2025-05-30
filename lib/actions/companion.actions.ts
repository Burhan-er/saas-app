'use server'

import { auth } from "@clerk/nextjs/server";
import createSupabaseClient from "../supabase/server";

export const createCompanion = async (formData: CreateCompanion) => {
  const {userId: author} = await auth(); // await GEREKMİYOR (Clerk Server modülünde)

  const supabase = createSupabaseClient;

   const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select("*")
    .single(); // sadece bir kayıt beklendiği için

  if (error || !data) {
    throw new Error(error?.message || "Failed to create a new companion");
  }

  return data; 
};