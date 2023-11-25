use std::{io::{ErrorKind, Error, Result}, fs, path::Path, os::unix::prelude::FileTypeExt};

use ratatui::{prelude::Layout, widgets::Widget};

pub enum FileType {
  FOLDER,
  FILE,
}

pub struct File {
  pub file_type: FileType,
  pub name: String
}

pub struct Screen<'a> {
  pub loaded_files: Vec<File>,
  pub path: &'a Path
}

pub enum Operation {
  NAVIGATING,
  SEARCHING,
}

pub struct State<'a> {
  cursor_x_position: i8,
  cursor_y_position: i8,
  pub screens: Vec<Screen<'a>>,
  current_screen_index: usize,
  operation: Operation,
}


impl<'a> State<'a> {
  pub fn default () -> State<'a> {
    State {
      cursor_x_position: 0,
      cursor_y_position: 0,
      screens: Vec::new(),
      current_screen_index: 0,
      operation: Operation::SEARCHING,
    }
  }

  pub fn get_files_for_screen (&self, index: usize) -> Option<&Vec<File>> {
    let screen = self.screens.get(index as usize)?;
    Some(&screen.loaded_files)
  }

  pub fn get_files_for_current_screen (&self) -> Option<&Vec<File>> {
    self.get_files_for_screen(self.current_screen_index)
  }

  fn inc_cursor_x_position (&mut self, value: i8) -> Result<()> {
    let files_for_current_screen = self.get_files_for_current_screen()
      .ok_or(Error::new(ErrorKind::Other, "Could not load the current files."))?;


    self.cursor_x_position = (self.cursor_x_position + value)
      .clamp(0, files_for_current_screen.len() as i8);

    Ok(())
  }

  fn inc_cursor_y_position (&mut self, value: i8) -> Result<()> {
    let amount_of_screens = self.screens.len();


    self.cursor_y_position = (self.cursor_x_position + value)
      .clamp(0, amount_of_screens as i8);

    Ok(())
  }

  pub fn move_cursor_up (&mut self) -> Result<()> {
    self.inc_cursor_y_position(-1)
  }

  pub fn move_cursor_down (&mut self) -> Result<()> {
    self.inc_cursor_y_position(1)
  }

  pub fn move_cursor_left (&mut self) -> Result<()> {
    self.inc_cursor_x_position(-1)
  }

  pub fn move_cursor_right (&mut self) -> Result<()> {
    self.inc_cursor_x_position(1)
  }

  pub fn load_root (&mut self, root_path: &'a Path) -> Result<()> {
    let dir_files = fs::read_dir(root_path)?;

    // TODO: CONTINUE HERE -> Make it safe
    let loaded_files: Vec<File> = dir_files
    .into_iter()
      .map(|file| {
        // DEBUG
        let unsafe_file = file.unwrap();
        let file_name = unsafe_file.file_name();
        return File { file_type: FileType::FILE, name: file_name.to_str().unwrap().to_owned() }
      })
    .collect();

    // DEBUG
    self.screens.push(
      Screen { loaded_files, path: root_path }
    );

    Ok(())
  }
}
