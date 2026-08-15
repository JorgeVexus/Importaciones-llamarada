# Shopify Product Import & Media Handling Rules

<RULE[shopify_product_import]>
SHOPIFY PRODUCT IMPORT & MEDIA HANDLING RULES:

1. TARGET STORE DOMAIN SPECIFICATION:
   - Always specify the target store domain explicitly using `--store=<domain>.myshopify.com` or set `SHOPIFY_FLAG_STORE`.
   - Default target store: `importaciones-la-llamarada-559r0m50.myshopify.com`
   - Default theme ID: `Importaciones-llamarada/main` (`#149334622250`)

2. PUBLIC MEDIA CDN REQUIREMENT FOR SHOPIFY CSV IMPORTS:
   - NEVER use temporary CDN links, localhost links, or session-authenticated URLs in the `Image Src` column of Shopify CSV files.
   - ALWAYS save image assets in the `assets/` folder, commit and push them to GitHub.
   - Use direct, public Raw GitHub CDN URLs for all `Image Src` fields:
     `https://raw.githubusercontent.com/JorgeVexus/Importaciones-llamarada/main/assets/<filename.png>`

3. CSV STRUCTURE FOR WHOLESALE PRODUCTS:
   - Mandatory CSV Columns: `Handle`, `Title`, `Body (HTML)`, `Vendor`, `Standard Product Type`, `Custom Product Type`, `Tags`, `Published`, `Option1 Name`, `Option1 Value`, `Variant SKU`, `Variant Grams`, `Variant Inventory Tracker`, `Variant Inventory Qty`, `Variant Inventory Policy`, `Variant Fulfillment Service`, `Variant Price`, `Variant Compare At Price`, `Variant Requires Shipping`, `Variant Taxable`, `Image Src`, `Status`
   - Vendor: `Importaciones La Llamarada`
   - Published: `TRUE`
   - Status: `active`
   - Variant Inventory Policy: `deny`
   - Variant Fulfillment Service: `manual`

4. RE-IMPORTING AND OVERWRITING:
   - When updating existing products via CSV import in Shopify Admin (`/admin/products`), always enable the checkbox:
     *"Reemplazar cualquier producto actual que tenga el mismo identificador"* (Overwrite any current products that have the same handle).

</RULE[shopify_product_import]>
