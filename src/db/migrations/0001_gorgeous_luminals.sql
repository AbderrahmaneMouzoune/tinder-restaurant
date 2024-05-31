ALTER TABLE "room" RENAME COLUMN "text" TO "hostName";--> statement-breakpoint
ALTER TABLE "room" ADD COLUMN "shareCode" text NOT NULL;