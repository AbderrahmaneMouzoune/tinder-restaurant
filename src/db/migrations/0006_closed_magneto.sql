ALTER TABLE "participants" ALTER COLUMN "room_shareCode" SET NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "participants" ADD CONSTRAINT "participants_room_shareCode_rooms_shareCode_fk" FOREIGN KEY ("room_shareCode") REFERENCES "public"."rooms"("shareCode") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
