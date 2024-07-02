const express = require('express');
const danz = require('d-scrape'); // Pastikan kamu telah menginstal modul ini
const skrep = require('../scrapers/ai');
const Tiktok = require('../scrapers/tiktok');
const down = require('../scrapers/downloader');
const router = express.Router();
const path = require('path')
/**
  * Downloader
  */
router.get('/downloader/tiktok', async (req, res, next) => {
 const url = req.query.url
 if (!url) {
   return res.status(400).json({ status: 'false', message: 'URL parameter is required' })
 }
 try {
   const down = new Tiktok
   const data = await down.downloader(url);
   if (!data) {
     return res.status(404).json({ status: 'error', message: 'No result found' });
  }
  res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: data
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
 })
router.get('/downloader/igdl', async (req, res, next) => {
 const url = req.query.url
 if (!url) {
   return res.status(400).json({ status: 'false', message: 'URL parameter is required' })
 }
 try {
   const data = await down.instagram(url);
   if (!data) {
     return res.status(404).json({ status: 'error', message: 'No result found' });
  }
  res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: data
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
 })
router.get('/downloader/ytdl', async (req, res, next) => {
 const url = req.query.url
 if (!url) {
   return res.status(400).json({ status: 'false', message: 'URL parameter is required' })
 }
 try {
   const data = await down.ytdl(url);
   if (!data) {
     return res.status(404).json({ status: 'error', message: 'No result found' });
  }
  res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: data
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
 })
router.get('/downloader/fbdl', async (req, res, next) => {
 const url = req.query.url
 if (!url) {
   return res.status(400).json({ status: 'false', message: 'URL parameter is required' })
 }
 try {
   const data = await down.fbdl(url);
   if (!data) {
     return res.status(404).json({ status: 'error', message: 'No result found' });
  }
  res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: data
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
 })
router.get('/downloader/twitterdl', async (req, res, next) => {
 const url = req.query.url
 if (!url) {
   return res.status(400).json({ status: 'false', message: 'URL parameter is required' })
 }
 try {
   const data = await down.twitterdl(url);
   if (!data) {
     return res.status(404).json({ status: 'error', message: 'No result found' });
  }
  res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: data
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
 })
// ===================
// AI
const mess = {
  query: "Please input query",
  url: "Please input URL",
  notres: "No results found",
  error: "An error occurred"
};

router.get('/ai/thinkany', async(req, res, next) => {
 const query = req.query.query;
 if (!query) {
  return res.status(400).json({ status: 'false', message: 'Query parameter is required' })
 }
 try {
 const ai = await skrep.thinkany(query);
 res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: ai
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
})

router.get('/ai/luminai', async(req, res, next) => {
 const query = req.query.query;
 if (!query) {
  return res.status(400).json({ status: 'false', message: 'Query parameter is required' })
 }
 try {
 const ai = await skrep.luminai(query);
 res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: ai
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
})
router.get('/ai/yousearch', async(req, res, next) => {
 const query = req.query.query;
 if (!query) {
  return res.status(400).json({ status: 'false', message: 'Query parameter is required' })
 }
 try {
 const ai = await skrep.yousearch(query);
 res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: ai
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
})
router.get('/ai/gpt', async(req, res, next) => {
 const query = req.query.query;
 if (!query) {
  return res.status(400).json({ status: 'false', message: 'Query parameter is required' })
 }
 try {
 const ai = await skrep.LetmeGpt(query);
 res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: ai
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
})
router.get('/ai/animediff', async(req, res, next) => {
 const query = req.query.query;
 if (!query) {
  return res.status(400).json({ status: 'false', message: 'Query parameter is required' })
 }
 try {
 const ai = await skrep.animediff(query);
 res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: ai
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
})

router.get('/ai/bingimg', async(req, res, next) => {
 const query = req.query.query;
 if (!query) {
  return res.status(400).json({ status: 'false', message: 'Query parameter is required' })
 }
 try {
 const ai = await skrep.bingimg(query);
 res.json({
      status: true,
      developer: 'DitzOfc', // Ganti dengan nama developer kamu
      result: ai
     });
    } catch (e) {
   res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
})
router.get('/ai/remini', async (req, res, next) => {
  const url = req.query.url;
  if (!url) {
    return res.status(400).json({ status: 'false', message: 'URL parameter is required' });
  }
  try {
    const aiBuffer = await skrep.remini(url);
    res.set('Content-Type', 'image/jpeg');  // Atau 'image/png' sesuai tipe gambar yang dikembalikan
    return res.send(aiBuffer);
  } catch (e) {
    res.status(500).json({ status: 'error', message: 'An error occurred', error: e.message });
  }
});

module.exports = router;

module.exports = router;
