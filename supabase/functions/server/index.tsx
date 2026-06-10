import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-df9cde4b/health", (c) => {
  return c.json({ status: "ok" });
});

// Get all content
app.get("/make-server-df9cde4b/content", async (c) => {
  try {
    const sections = ['hero', 'projects', 'partners', 'footer'];
    const content: any = {};

    for (const section of sections) {
      const data = await kv.get(`content:${section}`);
      content[section] = data || getDefaultContent(section);
    }

    return c.json({ success: true, content });
  } catch (error) {
    console.log(`Error fetching content: ${error}`);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Get specific section content
app.get("/make-server-df9cde4b/content/:section", async (c) => {
  try {
    const section = c.req.param('section');
    const data = await kv.get(`content:${section}`);

    return c.json({
      success: true,
      content: data || getDefaultContent(section)
    });
  } catch (error) {
    console.log(`Error fetching content for section: ${error}`);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Update specific section content
app.put("/make-server-df9cde4b/content/:section", async (c) => {
  try {
    const section = c.req.param('section');
    const body = await c.req.json();

    await kv.set(`content:${section}`, body.content);

    return c.json({ success: true, message: 'Content updated successfully' });
  } catch (error) {
    console.log(`Error updating content for section: ${error}`);
    return c.json({ success: false, error: error.message }, 500);
  }
});

// Default content helper
function getDefaultContent(section: string) {
  const defaults: any = {
    hero: {
      image: '',
      title: 'ROCK',
      subtitle: 'Modular kitchens from steininger.designers'
    },
    projects: [
      { id: 1, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '래미안 이스트 팰리스', type: 'APT', area: { m2: 211, pyeong: 65 } },
      { id: 2, image: '', title: 'ATICLE', date: '2024. 10. 07', name: 'h', type: 'APT', area: { m2: 211, pyeong: 65 } },
      { id: 3, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '숲타운하우스', type: 'APT', area: { m2: 211, pyeong: 65 } },
      { id: 4, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '래미안대치팰리스', type: 'APT', area: { m2: 211, pyeong: 65 } },
      { id: 5, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '시범한양아파트', type: 'APT', area: { m2: 211, pyeong: 65 } },
      { id: 6, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '트라지움', type: 'APT', area: { m2: 211, pyeong: 65 } },
      { id: 7, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '101', type: 'APT', area: { m2: 211, pyeong: 65 } },
      { id: 8, image: '', title: 'ATICLE', date: '2024. 10. 07', name: '타미힐', type: 'APT', area: { m2: 211, pyeong: 65 } },
    ],
    partners: [
      { id: 1, name: 'Partner 1', logo: '' },
      { id: 2, name: 'Partner 2', logo: '' },
      { id: 3, name: 'Partner 3', logo: '' },
      { id: 4, name: 'Partner 4', logo: '' },
      { id: 5, name: 'Partner 5', logo: '' },
      { id: 6, name: 'Partner 6', logo: '' },
      { id: 7, name: 'Partner 7', logo: '' },
      { id: 8, name: 'Partner 8', logo: '' },
    ],
    footer: {
      companyName: 'botton',
      contact: '',
      address: '',
      email: '',
      social: {
        instagram: '',
        youtube: '',
        facebook: '',
        twitter: ''
      }
    }
  };

  return defaults[section] || null;
}

Deno.serve(app.fetch);