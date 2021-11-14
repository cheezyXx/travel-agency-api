import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TripType {
  RO = 'ROOM_ONLY',
  BB = 'BED_AND_BREAKFAST',
  HN = 'HALF_BOARD',
  FB = 'FULL_BOARD',
  AL = 'ALL_INCLUSIVE',
}

@Entity({ name: 'trip_type' })
export class TripTypeEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', name: 'name', nullable: false, unique: true })
  name: TripType;

  @UpdateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
