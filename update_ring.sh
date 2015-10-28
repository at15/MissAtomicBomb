#!/usr/bin/env bash
echo "update dyweb/ring"
cd "server"
rm -rf vendor/dyweb
composer update dyweb/ring