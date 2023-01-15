import { Entity, Column, Generated, Unique } from 'typeorm';
import { Base } from '@/core/entities/base.entity';

@Entity('user')
export class User extends Base {
  @Generated('uuid')
  globalId: string;

  @Column({ length: 50 })
  firstName: string;

  @Column({ length: 50 })
  lastName: string;

  @Column({ length: 150})
  @Unique('mail', ['mail'])
  mail: string;
}