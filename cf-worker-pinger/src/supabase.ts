import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://gxpiyaggknnhclxdmdyl.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd4cGl5YWdna25uaGNseGRtZHlsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDAyODM4ODEsImV4cCI6MjA1NTg1OTg4MX0.x6jUwUa_S2_SqOZ4RgTu5PYLcrVY6YLOs2X_x80Ub_w')

const updateRecord = async () => {
	const { error } = await supabase
		.from('ping')
		.insert({ status: "ok" })
		.select("*");

	if (error) {
		console.error(error);
	}
}

export default updateRecord;
