use std::{io::{ErrorKind, Error, Result}, fs, path::Path, error::Error};

use ratatui::widgets::ListState;

pub enum FileType {
  FOLDER,
  FILE,
}

pub struct File {
  pub file_type: FileType,
  pub name: String
}

pub struct Pane<'a> {
  pub loaded_files: Vec<File>,
  pub list_state: ListState,
  pub path: &'a Path
}

pub enum Operation {
  NAVIGATING,
  SEARCHING,
}

pub struct State<'a> {
  pane_in_focus: usize,
  pub panes: Vec<Pane<'a>>,
  current_pane_index: usize,
  operation: Operation,
}


impl<'a> State<'a> {
  pub fn default () -> State<'a> {
    State {
      pane_in_focus: 0,
      panes: Vec::new(),
      current_pane_index: 0,
      operation: Operation::SEARCHING,
    }
  }

  pub fn get_files_for_pane (&self, index: usize) -> Option<&Vec<File>> {
    let pane = self.panes.get(index)?;
    Some(&pane.loaded_files)
  }

  pub fn get_files_for_current_pane (&self) -> Option<&Vec<File>> {
    self.get_files_for_pane(self.current_pane_index)
  }

  fn inc_cursor_y_position (&mut self, value: i8) -> Result<()> {
    let pane = self.panes.get_mut(self.pane_in_focus)
      .ok_or(Error::new(ErrorKind::Other, "Could not access the current pane."))?;

    let selection = pane.list_state.selected().unwrap_or(0);
    let files_count = pane.loaded_files.len() as i8;

    let next_selection = ((selection as i8) + value)
      .clamp(0, files_count);

    pane.list_state.select(Some(next_selection as usize));

    Ok(())
  }

  fn inc_cursor_x_position (&mut self, value: i8) -> Result<()> {
    let amount_of_panes = self.panes.len() as i8;

    let selection = self.pane_in_focus;

    let next_selection = (selection as i8) + value
      .clamp(0, amount_of_panes);

    self.pane_in_focus = next_selection as usize;

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

  pub fn open_selection (&mut self) -> Result<()> {
    let panes_count = self.panes.len();
    let pane_option = self.panes.get(self.current_pane_index);

    if let Some(pane) = pane_option {
      // TODO: CONTINUE HERE
    }

    return Err(Error::new(ErrorKind::Other, "Could not open it."))
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

    let mut list_state = ListState::default();
    list_state.select(Some(0));

    self.panes.push(Pane {
      list_state,
      loaded_files,
      path: root_path
    });

    Ok(())
  }
}
