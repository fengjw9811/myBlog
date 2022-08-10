#!/bin/sh
cd C:/Users/LiZilin/Desktop/fengjw/myBlog/logs
cp access.log $(date +%Y-%m-%d).access.log
echo "" > access.log