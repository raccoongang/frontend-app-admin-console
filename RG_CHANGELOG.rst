RG Changelog
############

All notable changes to this project will be documented in this file.

The format is based on `Keep a Changelog <https://keepachangelog.com/en/1.0.0/>`_,
and this project adheres to customized Semantic Versioning e.g.: `verawood-rg.1`

[Unreleased]
************

Changed:
========
* Align the AuthZ pages with RG chrome spacing and stretch the page background to the viewport (VERA-29)
* Take Paragon core and light stylesheets from ``PARAGON_THEME_URLS`` instead of bundling them (VERA-29)

Fixed:
======
* Data table block no longer grows by ~380px when a filter dropdown is opened, and wide tables
  scroll inside the table container instead of the page (VERA-29)
