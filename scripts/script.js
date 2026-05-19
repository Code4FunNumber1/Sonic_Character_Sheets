const SUPABASE_URL = "https://dddvvovppgmxapfkgexx.supabase.co";
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRkZHZ2b3ZwcGdteGFwZmtnZXh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkxOTg0NzcsImV4cCI6MjA5NDc3NDQ3N30.zLFEsAtwQS3voINo7JsXmWZGN4PCBVSC2ACm6zIn9Ug";
const db = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

async function loadEntry(character){

    const {data, error} = await db
        .from("characters")
        .select("*")
        .eq('short_name', character);

    if (error){
        console.error("Error loading entries:", error);
        return;
    }

    const content = document.querySelector("#content");
    
    let html = "";

    content.innerHTML = data.map(entry => html += `
            <div class="character">
                <div>
                    <h1>${entry.name}</h1>
                </div>

                <main id="main">
                    <div class="container" id="image-container">
                        <img src="../../images/${entry.image_filename}" alt="${entry.name}" class="character-image">
                        <p>${entry.character_description}</p>
                    </div>

                    <p class="description">${entry.description}</p>
                </main>
            </div>
    `);
    
    content.innerHTML = html;

}

