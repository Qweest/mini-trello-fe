export type BoardsResponse = Board[];

export interface Board {
  id: string;
  name: string;
  users: string[];
  settings: BoardSettings;
  lastView?: string;
}

export interface BoardSettings {
  backgroundImage: string;
  permissionLevel: BoardPermissionLevel;
}

export type BoardPermissionLevel = 'private' | 'group';
