import express from 'express';
import helmet from 'helmet';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(helmet({ contentSecurityPolicy: false }));

app.use(express.static(join(__dirname, 'public')));

const PORT = process.env.PORT || 5009;
app.listen(PORT, () => {
  console.log(`Bordplacering running on http://localhost:${PORT}`);
});
