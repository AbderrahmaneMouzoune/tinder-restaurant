ALTER TABLE "room" RENAME TO "rooms";--> statement-breakpoint
ALTER TABLE "rooms" ADD CONSTRAINT "rooms_shareCode_unique" UNIQUE("shareCode");