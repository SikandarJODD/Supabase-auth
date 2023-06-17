import supabase from '$lib/db';
export const load = async () => {
	let data = await supabase.from('products').select('*');
	return { prodcts: data };
};
	

  
