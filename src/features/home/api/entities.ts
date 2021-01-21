export type BoardsResponse = Board[];

export interface Board {
  id: string;
  name: string;
  users: string[];
  viewedAt: Date;
  settings: BoardSettings;
}

export interface BoardSettings {
  backgroundImage: string;
  permissionLevel: BoardPermissionLevel;
}

export type BoardPermissionLevel = 'private' | 'group';
