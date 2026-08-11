import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const htmlPath = new URL("../.next/server/app/index.html", import.meta.url);

test("renders Pintos business data and conversion paths", async () => {
  const html = await readFile(htmlPath, "utf8");
  assert.match(html, /Tu idea/);
  assert.match(html, /Comte d.Urgell/);
  assert.match(html, /5,0/);
  assert.match(html, /wa\.me\/34602037660/);
  assert.match(html, /fresha\.com/);
});

test("uses real business images and review proof", async () => {
  const html = await readFile(htmlPath, "utf8");
  assert.match(html, /pintos-06\.jpg/);
  assert.match(html, /Jade O\./);
  assert.match(html, /Reseña verificada/);
});
