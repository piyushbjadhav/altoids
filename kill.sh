#!/bin/sh
ps aux | awk '$11~/vim/ {PID = $2} END {if (PID) print "kill -9 "PID; else print "echo no process"}' | bash
