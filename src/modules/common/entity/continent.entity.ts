import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum Continent {
  EUROPE = 'europe',
  ASIA = 'asia',
  AFRICA = 'africa',
  NORTH_AMERICA = 'north_america',
  SOUTH_AMERICA = 'south_america',
  ANTARCTICA = 'antarctica',
}

@Entity({ name: 'continent' })
export class ContinentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', name: 'name', nullable: false, unique: true })
  name: Continent;

  @UpdateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
