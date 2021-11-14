import {
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { CountryEntity } from '../../common/entity/country.entity';
import { ContinentEntity } from '../../common/entity/continent.entity';

@Entity({ name: 'trip' })
export class TripEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CountryEntity, (country) => country.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'country_id', referencedColumnName: 'id' })
  country: string;

  @ManyToOne(() => ContinentEntity, (continent) => continent.id, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    nullable: false,
  })
  @JoinColumn({ name: 'continent_id', referencedColumnName: 'id' })
  continent: string;

  @UpdateDateColumn({
    type: 'timestamptz',
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
